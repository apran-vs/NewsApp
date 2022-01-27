import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, discription} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://s.yimg.com/os/creatr-uploaded-images/2021-09/5035fef0-1bd6-11ec-b7e5-a610838e0b98" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
