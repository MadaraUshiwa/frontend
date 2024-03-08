import React from 'react';


function loading(props) {
    return (
        <div className='loading'>
            <div class="terminal-loader">
                <div class="terminal-header">
                    <div class="terminal-title">Status</div>
                    <div class="terminal-controls">
                    <div class="control close"></div>
                    <div class="control minimize"></div>
                    <div class="control maximize"></div>
                    </div>
                </div>
                <div class="text">Loading...</div>
                </div>
        </div>
        
    );
}

export default loading;