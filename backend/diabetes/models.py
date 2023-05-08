from django.db import models

class Information(models.Model):
    glucose = models.IntegerField(
        verbose_name='Blood glucose level',
    )
    age = models.IntegerField(
        verbose_name='Age',
    )
    bmi = models.FloatField(
        verbose_name='Body Mass Index (BMI)',
    )
    bloodPressure = models.IntegerField(
        verbose_name='Blood pressure',
    )
    pregnancies = models.IntegerField(
        verbose_name='Number of pregnancies',
    )
    weight = models.IntegerField(
        verbose_name='Weight',
    )
    height = models.IntegerField(
        verbose_name='Height',
    )
    skinThickness = models.IntegerField(
        help_text='The thickness of the skin at the triceps in millimeters'
    )
    insulin = models.IntegerField(
        help_text='The level of insulin in the blood in milligrams per deciliter (mg/dL)'
    )
    diabetesPedigreeFn = models.IntegerField(
        verbose_name='Diabetes pedigree function',
    )

@property
def id(self):
    try:
        return self.id
    except Exception as e:
        print(f"Error while fetching id: {e}")

def __str__(self):
    return f"Patient {self.id}"
