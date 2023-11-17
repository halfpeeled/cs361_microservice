# cs361_microservice
# Unit Converter
## This microservice accepts one or more units of measurement to convert from either American Standard to Metric or vice-versa.

## The service can be called be sending an HTTP POST request to the endpoint **http://digitalgrind.org/unit-converter** and include in the body a JSON collection as defined below:
```json
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

## An example call using JavaScript fetch:
```javascript
const units = [{"unit_type": "oz","unit_quantity": "3","source": "someID"},{"unit_type": "fl_oz","unit_quantity": "2","source": "anotherId"}]
let req = await fetch('http://digitalgrind.org/unit-converter', {
    method: 'POST',
    mode: "cors",
    cache: "no-cache", 
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow", 
    referrerPolicy: "no-referrer",
    body: JSON.stringify(units),
});

const response = await req.json();
// Do something with the response...
```

##Upon the successful connection to the endpoint, after processing, the requested conversions are then returned via a JSON collection as defined below:

```json
[
    {
        "converted_type": "g",
        "converted_quantity": 85.048,
        "source": "someID"
    },
    {
        "converted_type": "ml",
        "converted_quantity": 59.147,
        "source": "anotherId"
    }
]
```


## Where:
- **converted_type** is the abbreviated unit ofthe converted measurement
- **converted_quantity** is the amount of the converted unit of measurement
- **source** is an optional field to facilitate a target element to update on return (e.g., the ID of an HTML element)

## The returned data could then be applied to an HTMl element as such:

```javascript
const target = document.getElementById(response[index].source);
target.value = response[index].converted_quantity + response[index].converted_type;
```

## UML Reprensentation:

![UML](https://github.com/halfpeeled/cs361_microservice/blob/master/assets/uml.png)
