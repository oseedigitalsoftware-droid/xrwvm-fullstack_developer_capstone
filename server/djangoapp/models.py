from django.db import models
from django.utils.timezone import now
from django.core.validators import MaxValueValidator, MinValueValidator


class CarMake(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500, blank=True)
    country = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name


class CarModel(models.Model):
    SEDAN = 'SEDAN'
    SUV = 'SUV'
    WAGON = 'WAGON'
    HATCHBACK = 'HATCHBACK'
    COUPE = 'COUPE'
    TYPE_CHOICES = [
        (SEDAN, 'Sedan'),
        (SUV, 'SUV'),
        (WAGON, 'Wagon'),
        (HATCHBACK, 'Hatchback'),
        (COUPE, 'Coupe'),
    ]

    car_make = models.ForeignKey(CarMake, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    car_type = models.CharField(max_length=20, choices=TYPE_CHOICES, default=SEDAN)
    year = models.IntegerField(
        default=2023,
        validators=[MaxValueValidator(2023), MinValueValidator(2015)],
    )
    dealer_id = models.IntegerField(default=1)
    created = models.DateTimeField(default=now, editable=False)

    def __str__(self):
        return self.name
