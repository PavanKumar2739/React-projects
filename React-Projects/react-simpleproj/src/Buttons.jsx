const Buttons = ()=>{
    return(
        <div style={{display:'flex',justifyContent:'space-between',gap:'20px',flexWrap:'wrap'}}>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>
        
        <button type="button" class="btn btn-link">Link</button>
        </div>
    )
}

export default Buttons;