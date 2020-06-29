import React, { Component } from 'react';

import './app.scss';

export class App extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.stopPropagation();
        alert("Button Clicked!");
    }

    render() {
        const label = 'Primary Button';
        const buttonClass = 'primary';
        const icon = 'apps';

        return (
            <div className="app">
                <header className="flex">
                    <h1>Welcome to React sandbox!</h1>
                </header>
                <main>
                    <wc-button label={label} class={buttonClass} action={this.handleClick} icon={icon}></wc-button>
                </main>
            </div>
        );
    }
}

// export const App = () => {
/*
 * Replace the elements below with your own.
 *
 * Note: The corresponding styles are in the ./app.scss file.
 */
//   const label = 'Primary Button';
//   const buttonClass = 'primary';
//   function action() {
//     alert("Button Clicked!");
//   };
//   const buttonAction = action;
//   const icon = 'apps';

//   return (
//     <div className="app">
//       <header className="flex">
//         <h1>Welcome to React sandbox!</h1>
//       </header>
//       <main>
//       <wc-button label={label} class={buttonClass} action={buttonAction} icon={icon}></wc-button>
//       </main>
//     </div>
//   );
// };

// export default App;
