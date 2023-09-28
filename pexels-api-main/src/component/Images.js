import React from "react";

class Images extends React.Component {
    render() {
        //logic
        const { image } = this.props
        console.log(image);
        return (
            <>
                <div className="col-md-3" >
                    <img src={image.src.landscape} alt="img not found" className="img-fluid"  />
                </div>
            </>
        );
    }
}
export default Images;