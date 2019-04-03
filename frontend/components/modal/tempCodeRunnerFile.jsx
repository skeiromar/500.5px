          <div className="modal-background" onClick={this.closeMod}>
            <div className="modal-child upload-modal" onClick={e => e.stopPropagation()}>
    
                  <div className="drop-modal-area" aria-disabled="false" style={{position: 'relative'}} >
                  <p className="modal-btn-p">
                    <button className="button-style">Upload</button>
                    Or drag &amp; drop photos anywhere on this page
                  <input accept="image/*" type="file" autoComplete="off" 
                  className="input-style" onChange={this.handleFile}/>
                  </p>
                </div>
    
    
            </div>
          </div>