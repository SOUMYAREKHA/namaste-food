export const mockData = {
  success: true,
  message: "Restaurant List fetched successfully",
  data: {
    data: {
      cards: [
        {},
        {
          card: {
            card: {
              gridElements: {
                infoWithStyle: {
                  restaurants: [
                    {
                      info: {
                        id: "123456",
                        name: "Pizza Paradise",
                        cloudinaryImageId:
                          "rng/md/carousel/production/pizza123",
                        locality: "MG Road",
                        areaName: "Central District",
                        costForTwo: "₹400 for two",
                        cuisines: ["Pizza", "Italian", "Fast Food"],
                        avgRating: 4.3,
                        avgRatingString: "4.3",
                        totalRatingsString: "10K+ ratings",
                        veg: false,
                        sla: {
                          deliveryTime: 30,
                          lastMileTravel: 3.5,
                          slaString: "30 mins",
                        },
                        aggregatedDiscountInfoV3: {
                          header: "50% OFF",
                          subHeader: "UPTO ₹100",
                        },
                      },
                    },
                    // ... more restaurants
                  ],
                },
              },
            },
          },
        },
      ],
    },
  },
};

export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/";
