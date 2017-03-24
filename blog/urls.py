# -*- coding: utf-8 -*-
from django.conf.urls import url

from blog.views import PostsView

urlpatterns = [
    url(r"^posts/$", PostsView.as_view(), name="posts")
]