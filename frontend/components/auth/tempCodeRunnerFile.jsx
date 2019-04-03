            <form onSubmit={this.handleSubmit} className="form-container">
            <h2>Join 500.5px</h2>
                <p>Share your photos, get inspired, and grow your skills.</p>
                <ul className="li-wo-bullets">

                <label htmlFor="" /><p className="form-label">Username</p>
                <li className="form-components">
                <input type="text" onChange={this.onChange("username")}  className="form-input"/>
                

                </li>
                <label htmlFor="" /><p className="form-label">Email</p>
                <li className="form-components">
                <input type="text" onChange={this.onChange("email")}  className="form-input"/>

                </li>    

                <label htmlFor="" /><p className="form-label">Password</p>
                <li className="form-components">
                <input type="password" onChange={this.onChange("password")}  className="form-input"/>

                </li>


                <li className="button-log-submit">
                <input type="submit" value="sign up" />
                </li>
                <p>
                Already have an account? <a href="/#/login" className="lighten-a">Log in</a> 

                </p>
                </ul>
                <p className="session-errors">
                {this.props.errors}
                </p>
            </form>