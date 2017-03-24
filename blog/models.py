# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from datetime import datetime
from django.db import models

# Create your models here.
from pytz import UTC


class Post(models.Model):
    id = models.CharField(
        primary_key=True,
        max_length=256,
        default=datetime.now(UTC).strftime("%Y/%m/%d"),
        help_text=u"URLになる。デフォルトは日付"
    )
    title = models.CharField(
        max_length=255,
        help_text=u"ブログのタイトル"
    )
    content = models.TextField(
        null=True,
        blank=True,
        help_text=u"Markdownのコンテンツが入稿される"
    )
    is_published = models.BooleanField(
        default=True,
        help_text=u"公開されてるかどうか"
    )
    published = models.DateTimeField(
        default=datetime.now(UTC)
    )
    created = models.DateTimeField(
        auto_now_add=True,
    )
    updated = models.DateTimeField(
        auto_now=True
    )

    def save(self, *args, **kwargs):
        self.sort_id = str(self.published)
        return super(Post, self).save(*args, **kwargs)


    def __str__(self):
        return self.id