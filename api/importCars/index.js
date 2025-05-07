module.exports = async function (context, req) {
    const car = req.body;
  
    // Vereiste hoofdvelden
    const requiredRootFields = ['id', 'registration', 'car_overview'];
    const requiredOverviewFields = [
      'brand', 'model', 'body', 'price', 'pictures', 'description',
      'condition', 'stock_number', 'vin_number', 'year', 'mileage',
      'transmission', 'engine_size', 'driver_type', 'cylinders', 'fuel',
      'doors', 'color', 'seats', 'pk', 'variant', 'carrosserie'
    ];
  
    // Check op root velden
    for (const field of requiredRootFields) {
      if (!car[field]) {
        context.res = {
          status: 400,
          body: `Fout: veld '${field}' is verplicht.`
        };
        return;
      }
    }
  
    // Check op car_overview velden
    for (const field of requiredOverviewFields) {
      if (!car.car_overview[field]) {
        context.res = {
          status: 400,
          body: `Fout: veld 'car_overview.${field}' is verplicht.`
        };
        return;
      }
    }
  
    // Als alles klopt, opslaan in Cosmos DB
    context.bindings.carItem = car;
  
    context.res = {
      status: 200,
      body: {
        message: `Auto met ID ${car.id} succesvol opgeslagen in Cosmos DB.`
      }
    };
  };
  