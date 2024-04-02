// write javascript that downloads the image of each team and stores it locally
// use the node-fetch library to download the image
// use the fs library to save the image to the local file system
// use the path library to create the file path

const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

// get the data from the geojson file

// loop through the features array
data.features.forEach((feature) => {
    // get the url of the image
    const url = feature.properties.TeamImg;
    // get the file name from the url
    const fileName = path.basename(url);
    // get the file extension from the url
    const fileExtension = path.extname(url);
    // create the file path
    const filePath = path.join(__dirname, 'images', fileName);
    // download the image
    fetch(url)
        .then((res) => {
            // create a write stream
            const dest = fs.createWriteStream(filePath);
            // pipe the response to the write stream
            res.body.pipe(dest);
        })
        .catch((err) => {
            console.error(err);
        });
}
);



const data = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.838309,
                    50.73524
                ]
            },
            "properties": {
                "stadium": "Vitality Stadium",
                "teams": "Association Football Club Bournemouth",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/241px-AFC_Bournemouth_%282013%29.svg.png"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.108457,
                    51.555074
                ]
            },
            "properties": {
                "stadium": "Emirates Stadium",
                "teams": "Arsenal Football Club ",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.884841,
                    52.50909
                ]
            },
            "properties": {
                "stadium": "Villa Park",
                "teams": "Aston Villa Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/8/86/Aston_Villa_F.C._logo.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.190974,
                    51.481711
                ]
            },
            "properties": {
                "stadium": "Stamford Bridge",
                "teams": "Chelsea Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.085503,
                    51.398278
                ]
            },
            "properties": {
                "stadium": "Selhurst Park",
                "teams": "Crystal Palace Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/hif/c/c1/Crystal_Palace_FC_logo.png"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -2.966297,
                    53.438822
                ]
            },
            "properties": {
                "stadium": "Goodison Park",
                "teams": "Everton Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.142309,
                    52.620376
                ]
            },
            "properties": {
                "stadium": "King Power Stadium",
                "teams": "Leicester City Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -2.960852,
                    53.430827
                ]
            },
            "properties": {
                "stadium": "Anfield",
                "teams": "Liverpool Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -2.200409,
                    53.483152
                ]
            },
            "properties": {
                "stadium": "Etihad Stadium",
                "teams": "Manchester City Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -2.291373,
                    53.463094
                ]
            },
            "properties": {
                "stadium": "Old Trafford",
                "teams": "Manchester United Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.62162,
                    54.97554
                ]
            },
            "properties": {
                "stadium": "St James' Park",
                "teams": "Newcastle United Football Club ",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    1.309121,
                    52.622091
                ]
            },
            "properties": {
                "stadium": "Carrow Road",
                "teams": "Norwich City Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/1/17/Norwich_City_FC_logo.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.391047,
                    50.905894
                ]
            },
            "properties": {
                "stadium": "St. Mary's Stadium",
                "teams": "Southampton Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -2.175429,
                    52.988405
                ]
            },
            "properties": {
                "stadium": "Bet365 Stadium",
                "teams": "Stoke City Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Stoke_City_FC.svg/460px-Stoke_City_FC.svg.png"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.388177,
                    54.914421
                ]
            },
            "properties": {
                "stadium": "Stadium of Light",
                "teams": "Sunderland Association Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Logo_Sunderland.svg/300px-Logo_Sunderland.svg.png"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.401628,
                    51.649907
                ]
            },
            "properties": {
                "stadium": "Vicarage Road Stadium",
                "teams": "Watford Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.963952,
                    52.509074
                ]
            },
            "properties": {
                "stadium": "The Hawthorns",
                "teams": "West Bromwich Albion Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/West_Bromwich_Albion.svg/586px-West_Bromwich_Albion.svg.png"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -2.230224,
                    53.788983
                ]
            },
            "properties": {
                "stadium": "Turf Moor",
                "teams": "Burnley Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/6/6d/Burnley_FC_Logo.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -2.130433,
                    52.590238
                ]
            },
            "properties": {
                "stadium": "Molineux Stadium",
                "teams": "Wolverhampton Wanderers Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.367639,
                    53.746239
                ]
            },
            "properties": {
                "stadium": "MKM Stadium",
                "teams": "Hull City Association Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Hull_City_Crest_2014.svg/1024px-Hull_City_Crest_2014.svg.png"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.572278,
                    53.777833
                ]
            },
            "properties": {
                "stadium": "Elland Road",
                "teams": "Leeds United Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/5/54/Leeds_United_F.C._logo.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.083642,
                    50.861579
                ]
            },
            "properties": {
                "stadium": "The American Express Community Stadium",
                "teams": "Brighton & Hove Albion Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.768423,
                    53.65424
                ]
            },
            "properties": {
                "stadium": "The John Smith's Stadium",
                "teams": "Huddersfield Town Association Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/7/7d/Huddersfield_Town_A.F.C._logo.png"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.132894,
                    52.939913
                ]
            },
            "properties": {
                "stadium": "The City Ground",
                "teams": "Nottingham Forest Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/e/e5/Nottingham_Forest_F.C._logo.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.21684,
                    54.578226
                ]
            },
            "properties": {
                "stadium": "Riverside Stadium",
                "teams": "Middlesbrough Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Middlesbrough_FC_crest.svg/193px-Middlesbrough_FC_crest.svg.png"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.0165,
                    51.538688
                ]
            },
            "properties": {
                "stadium": "London Stadium",
                "teams": "West Ham United Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.221647,
                    51.474897
                ]
            },
            "properties": {
                "stadium": "Craven Cottage",
                "teams": "Fulham Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.066417,
                    51.60475
                ]
            },
            "properties": {
                "stadium": "Tottenham Hotspur Stadium",
                "teams": "Tottenham Hotspur Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.470864,
                    53.370346
                ]
            },
            "properties": {
                "stadium": "Bramall Lane",
                "teams": "Sheffield United Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.431782,
                    51.884226
                ]
            },
            "properties": {
                "stadium": "Kenilworth Road Stadium",
                "teams": "Luton Town Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/9/9d/Luton_Town_logo.svg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.288884,
                    51.490729
                ]
            },
            "properties": {
                "stadium": "Gtech Community Stadium",
                "teams": "Brentford Football Club",
                "TeamImg": "https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg"
            }
        }
    ]
};