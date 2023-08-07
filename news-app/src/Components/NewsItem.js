import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let  {title, descreption,imageUrl, newUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{descreption}</p>
            <a href="/newsDetails " className="btn btn-sm btn-primary">Read More</a>
        </div>
    </div>
    </div>
    )
  }
}

export default NewsItem
