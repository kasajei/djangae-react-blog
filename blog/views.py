# Create your views here.
from rest_framework.generics import ListAPIView

from blog.models import Post
from blog.serializers import PostSerializer


class PostsView(ListAPIView):
    queryset = Post.objects.all().filter(is_published=True)
    serializer_class = PostSerializer