# Generated by Django 4.0.3 on 2022-12-02 14:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_remove_file_title'),
    ]

    operations = [
        migrations.RenameField(
            model_name='file',
            old_name='fileContent',
            new_name='file',
        ),
    ]
