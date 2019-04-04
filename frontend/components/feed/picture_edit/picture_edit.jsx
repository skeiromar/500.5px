import React, {Component} from 'react'

class PictureEdit extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.picture;

    this.handleSubmit = this
      .handleSubmit
      .bind(this);

  }
  componentDidMount() {
    // find ways to minimize backend requests.
    if (this.props.picture.empty) 
      this.props.requestPicture(this.props.match.params.pictureId);
    }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pictureId !== this.props.match.params.pictureId) {
      this
        .props
        .requestPicture(this.props.match.params.pictureId);
    }
  }
  handleSubmit(e) {
    e.preventDefault();

    this
      .props
      .updatePicture(this.state)
      .then(() => this.props.history.push(`/pictures/${this.props.match.params.pictureId}`), errors => this.props.receiveEditErrors(errors.responseJSON));
  }
  onChange(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  render() {
    const {picture} = this.props;

    if (!picture) 
      return null;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-container">
          <h2>500.5px</h2>
          <p>Share your photos, get inspired, and grow your skills.</p>
          <ul className="li-wo-bullets">

            <label htmlFor=""/>
            <p className="form-label">Title:</p>
            <li className="form-components">
              <input
                type="text"
                onChange={this.onChange("title")}
                className="form-input"
                value={this.state.title}/>

            </li>
            <label htmlFor=""/>
            <p className="form-label">Description:</p>
            <li className="form-components">
              <input
                type="text"
                onChange={this.onChange("description")}
                className="form-input"
                value={this.state.description}/>

            </li>

            <li className="button-log-submit">
              <input type="submit" value="Update Picture"/>
            </li>

          </ul>
          <p className="session-errors">
            {this.props.errors}
          </p>
        </form>
      </div>
    )
  }
}

export default PictureEdit;