# Complete the roadsAndLibraries function below.
def roads_and_libraries(n: int, c_lib: int, c_road: int, cities: [[int, int]]):
  if c_lib <= c_road:
    return n * c_lib
  
  key_id = 0
  city_group_dict = {}
  city_dict = {}

  for city in cities:
    city_0_set_key = city_dict.get(city[0])
    city_1_set_key = city_dict.get(city[1])

    if city_0_set_key == None and city_1_set_key == None:
      key_id += 1
      city_group_dict[key_id]= {city[0], city[1]}
      city_dict[city[0]] = key_id
      city_dict[city[1]] = key_id
    elif city_0_set_key != None and city_1_set_key == None:
      city_group_dict[city_0_set_key].add(city[1])
      city_dict[city[1]] = city_0_set_key
    elif city_0_set_key == None and city_1_set_key != None:
      city_group_dict[city_1_set_key].add(city[0])
      city_dict[city[0]] = city_1_set_key
    elif city_0_set_key != city_1_set_key:
      # Merge
      city_1_set = city_group_dict.pop(city_1_set_key)
      city_group_dict[city_0_set_key].update(city_1_set)
      for city in city_1_set:
        city_dict[city] = city_0_set_key
  
  num_sections = len(city_group_dict) + n - len(city_dict)

  return (n - num_sections) * c_road + num_sections * c_lib