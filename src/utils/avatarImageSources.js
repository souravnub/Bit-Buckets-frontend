const images = [
    "https://res.cloudinary.com/sourav-cloudinary-account/image/upload/v1662185207/Bit-Buckets/avatar-1.png",
    "https://res.cloudinary.com/sourav-cloudinary-account/image/upload/v1662185205/Bit-Buckets/avatar-2.png",
    "https://res.cloudinary.com/sourav-cloudinary-account/image/upload/v1662185206/Bit-Buckets/avatar-3.png",
    "https://res.cloudinary.com/sourav-cloudinary-account/image/upload/v1662185205/Bit-Buckets/avatar-4.png",
    "https://res.cloudinary.com/sourav-cloudinary-account/image/upload/v1662185205/Bit-Buckets/avatar-5.png",
    "https://res.cloudinary.com/sourav-cloudinary-account/image/upload/v1662185205/Bit-Buckets/avatar-6.png",
    "https://res.cloudinary.com/sourav-cloudinary-account/image/upload/v1662185206/Bit-Buckets/avatar-7.png",
    "https://res.cloudinary.com/sourav-cloudinary-account/image/upload/v1662185207/Bit-Buckets/avatar-8.png",
];
export const avatarImages = images.map((img, idx) => {
    return { id: idx, src: img };
});
