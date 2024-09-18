import json

# Step 1: Read the content of the hexagons.geojson file
with open('hexagons.geojson', 'r') as file:
    data = json.load(file)

# Step 2: Parse the JSON content
features = data['features']

# Step 3: Iterate over the features and modify the 'votes' property for every other feature
for i, feature in enumerate(features):
    feature['properties']['votes'] = i % 2

# iterate through the features and number the ids in order
for i, feature in enumerate(features):
    feature['id'] = i

# Step 4: Write the modified content to a new file
with open('hexagons_modified.geojson', 'w') as file:
    json.dump(data, file, indent=4)

# run with python3 modify_votes.py