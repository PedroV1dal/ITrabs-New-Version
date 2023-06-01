from rest_framework import generics, serializers, permissions
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated
from .models import Advertisement
from .serializers import AdvertisementSerializer
from django.db.models import Q


class AdvertisementCreateAPIView(generics.CreateAPIView):
    '''
    Cria novos anúncios.
    '''
    queryset = Advertisement.objects.all()
    serializer_class = AdvertisementSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        # Verificar o número de anúncios existentes do usuário
        # e se ele excede o limite permitido
        if user.advertisement_set.count() >= 3:
            raise serializers.ValidationError(
                "Exceeded the maximum number of advertisements.")
        serializer.save(user=user)


class AdvertisementListAPIView(generics.ListAPIView):
    '''
    Retorna uma lista de todos os anúncios existentes.
    '''
    queryset = Advertisement.objects.all()
    serializer_class = AdvertisementSerializer


class AdvertisementDetailAPIView(generics.RetrieveAPIView):
    '''
    Retorna os detalhes de um anúncio específico com base no seu ID.
    '''
    queryset = Advertisement.objects.all()
    serializer_class = AdvertisementSerializer


class AdvertisementSearchAPIView(generics.ListAPIView):
    '''
    Pesquisa anúncios com base em um parâmetro de consulta fornecido.
    '''
    serializer_class = AdvertisementSerializer

    def get_queryset(self):
        search_query = self.request.query_params.get('query', '')
        if search_query:
            # Realizar uma pesquisa usando filtros no campo 'description',
            # 'category', 'price' e 'created_at'
            queryset = Advertisement.objects.filter(
                Q(description__icontains=search_query) |
                Q(category__icontains=search_query) |
                Q(price__icontains=search_query) |
                Q(created_at__icontains=search_query)
            )
        else:
            # Se nenhum parâmetro de pesquisa for fornecido, retornar todos os anúncios
            queryset = Advertisement.objects.all()
        return queryset


class AdvertisementUpdateAPIView(generics.UpdateAPIView):
    '''
    Atualiza um anúncio existente.
    '''
    queryset = Advertisement.objects.all()
    serializer_class = AdvertisementSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        # Obtém o anúncio pelo ID e verifica se o usuário atual é o criador do anúncio
        obj = super().get_object()
        if obj.user != self.request.user:
            # Levanta uma exceção se o usuário não for o criador do anúncio
            raise PermissionDenied(
                "You do not have permission to edit this advertisement.")
        return obj


class AdvertisementDeleteAPIView(generics.DestroyAPIView):
    '''
    Exclui um anúncio existente. 
    '''
    queryset = Advertisement.objects.all()
    serializer_class = AdvertisementSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        # Obtém o anúncio pelo ID e verifica se o usuário atual é o criador do anúncio
        obj = super().get_object()
        if obj.user != self.request.user:
            # Levanta uma exceção se o usuário não for o criador do anúncio
            raise PermissionDenied(
                "You do not have permission to delete this advertisement.")
        return obj
