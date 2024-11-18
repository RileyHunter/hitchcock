const urls = ["https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/photo-gallery.jpg?fit=771%2C262&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/black-throated-green-warbler.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/red-bellied-woodpecker.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/rose-breasted-grosbeak.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/prothonotary-warbler-1.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/scarlet-tanager.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/snowy-owl.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/blue-winged-warbler-2.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/barn-swallow.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/red-headed-woodpecker.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/chipping-sparrow.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/blue-winged-warbler.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/wood-duck.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/northern-cardinal.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/eastern-bluebird.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2019/05/kentucky-warbler-1.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/swamp-sparrow.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/snow-bunting.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/blackburnian-warbler.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/caspian-tern.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/hooded-warbler.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/northern-pintails.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/great-blue-heron.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/bobolink.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/bird-photography-with-400mm-lens.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/baltimore-oriole.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/white-brested-nuthatch.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/magnolia-warbler.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/green-heron.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/northern-mockingbird.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/scarlet-tanager-2.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/how-to-photograph-birds-in-flight-1.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/horned-grebe.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/Blue-winged-teal.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/Canada-warbler.jpg?fit=600%2C405&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/Blackpoll-warbler.jpg?fit=600%2C400&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2016/03/barn-swallow-ontario.jpg?fit=600%2C354&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2016/03/bufflehead.jpg?fit=600%2C391&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/blue-winged-warbler4.jpg?fit=600%2C391&ssl=1", "https://i0.wp.com/birdphotographylife.com/wp-content/uploads/2018/04/yellow-warbler2.jpg?fit=600%2C391&ssl=1"];
function fuckYeah() {
    getData();
    document.getElementById('attribution').hidden = false;
    document.getElementById('startButton').innerText = 'Click again!';
}

async function getData() {
    const url = urls[Math.floor(Math.random() * urls.length)];
    try {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const imageUrl = URL.createObjectURL(blob);
                const imageElement = document.createElement("img");
                imageElement.src = imageUrl;
                const container = document.getElementById("birds");
                container.innerHTML = '';
                container.appendChild(imageElement);
            });
    } catch (error) {
        console.error(error.message);
    }
}