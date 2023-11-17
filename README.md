# cs361_microservice
# Unit Converter
## This microservice accepts one or more units of measurement to convert from either American Standard to Metric or vice-versa.

## The service can be called be sending an HTTP POST request to the endpoint **http://digitalgrind.org/unit-converter** and include in the body a JSON array as defined below:
```
[
  {
    "unit_type": "lb",
    "unit_quantity": "3",
    "source": "someID"
  },
  {
    "unit_type": "g",
    "unit_quantity": "2",
    "source": "anotherId"
  }
]
```
## Where:
- **unit_type** is the abbreviated unit of measurement to convert 
- **unit_quantity** is the amount of the unit of measurement to convert
- **source** is an optional field to facilitate a target element to update on return (e.g., the ID of an HTML element)
- ![Image](https://en.wikipedia.org/wiki/Ada_Lovelace#/media/File:Ada_Lovelace_portrait.jpg](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/800px-Ada_Lovelace_portrait.jpg)https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/800px-Ada_Lovelace_portrait.jpg)
