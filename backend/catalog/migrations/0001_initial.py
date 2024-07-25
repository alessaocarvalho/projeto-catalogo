# Generated by Django 5.0.7 on 2024-07-25 02:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Artista',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('tipo', models.CharField(choices=[('Banda', 'Banda'), ('Solo', 'Solo')], max_length=10)),
                ('email', models.EmailField(max_length=254)),
                ('documento', models.CharField(max_length=20)),
                ('tipo_documento', models.CharField(choices=[('CPF', 'CPF'), ('RG', 'RG')], max_length=3)),
            ],
        ),
    ]
