#!/bin/bash

# Input CSV file
INPUT_FILE="fields.csv"

# Directory containing the downloaded images
# current directory
IMAGE_DIR="."

# rename the files so the'yre lowercase and replace spaces with hyphens
for file in "$IMAGE_DIR"/*; do
    # Get the base name of the file
    base_name=$(basename "$file")
    
    # Convert to lowercase and replace spaces with hyphens
    new_name=$(echo "$base_name" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
    
    # Rename the file
    mv "$file" "$IMAGE_DIR/$new_name"
done
echo "All files have been processed."