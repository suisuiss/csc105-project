import React from "react";
import "./AddProduct.css";
export default class AddImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log("handle uploading-", this.state.file);
    this.props.onImageUploadChange(this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    this.props.onImageUploadChange(e);
    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img class="img" src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e) => this._handleSubmit(e)}>
          <input
            className="fileInput"
            type="file"
            required
            onChange={(e) => this._handleImageChange(e)}
          />
          
        </form>
        <p className = "errorMsg">{this.state.file == "" ? this.props.errorMsgPic : null}</p>
        <div className="imgPreview">{$imagePreview}</div>
      </div>
    );
  }
}