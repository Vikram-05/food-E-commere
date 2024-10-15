import '../App.css'
import categoryList from '../../api/category.json'
// console.log(categoryList)

export const Slider = () => {
    return (
        <>
            <div className="slider_con">
                <h1 className='category_title'>Category</h1>
                <ul>
                    {
                        categoryList.map(({categoryName,img}, index) => {
                            return (
                                <li key={index} className='category_item'>
                                <div className="category_img">
                                    <img src={img} alt="" />
                                </div>
                                <div className="Category_name">
                                    <h2>{categoryName}</h2>
                                </div>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

