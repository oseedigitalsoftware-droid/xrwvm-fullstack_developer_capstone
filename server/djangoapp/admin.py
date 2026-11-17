from django.contrib import admin
from .models import CarMake, CarModel


class CarModelInline(admin.TabularInline):
    model = CarModel
    extra = 1


class CarModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'car_make', 'car_type', 'year', 'dealer_id')
    list_filter = ('car_make', 'car_type', 'year')
    search_fields = ('name',)


class CarMakeAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'country')
    search_fields = ('name',)
    inlines = [CarModelInline]


admin.site.register(CarMake, CarMakeAdmin)
admin.site.register(CarModel, CarModelAdmin)
