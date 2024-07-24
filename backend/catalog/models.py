from django.db import models

# Modelagem do Artista

class Artista(models.Model):
    TIPO_ARTISTA = [
        ('Banda', 'Banda'),
        ('Solo', 'Solo'),
    ]
    TIPO_DOCUMENTO = [
        ('CPF', 'CPF'),
        ('RG', 'RG'),
    ]

    nome = models.CharField(max_length=100)
    tipo = models.CharField(max_length=10, choices=TIPO_ARTISTA)
    email = models.EmailField()
    documento = models.CharField(max_length=20)
    tipo_documento = models.CharField(max_length=3, choices=TIPO_DOCUMENTO)

    def __str__(self) :
        return self.nome