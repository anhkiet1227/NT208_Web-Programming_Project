# Generated by Django 4.0.3 on 2022-12-02 13:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_file'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='file',
            name='title',
        ),
    ]
