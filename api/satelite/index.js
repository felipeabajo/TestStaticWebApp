module.exports = async function (context, req) {

    const imageUrl = "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_SNPP_CorrectedReflectance_TrueColor/default/2024-01-01/GoogleMapsCompatible_Level9/3/4/2.jpg";

    context.res = {
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            url: imageUrl
        }
    };
};