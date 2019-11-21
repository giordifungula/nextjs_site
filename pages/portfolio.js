import Menu from '../components/Menu';
import Layout from '../components/Layout'
import Gallery from '../components/Gallery';

// Will bring in the Gallery which will take images as a prop

const Portfolio = () => {
    // 
    const images = [] 
    //will store images here
    const imageCount = 14
    let count = 1;
    while (count <= imageCount){
        images.push(`/static/portfolio/${count}.jpg`)
        // append imags to the images array
        count++
    }
    return(
        <div className="container">
            <Layout>
                <h1>This is the Portfolio page</h1>
                <Gallery images={images}></Gallery>
            </Layout>
        </div>
    )
    
}

export default Portfolio;