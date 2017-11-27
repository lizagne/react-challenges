# Challenges

Make sure you keep the JS console open at all times and correct anything that it flags up.

## JSX

- Create a component `<Header>` that displays: `<h1>Hello, world</h1>`

- Create a component `<Paragraph>` that displays: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos.</p>`

- Create a component `<Square>` that displays a square `<div>` that is 200×200px and has a red background. You'll need to look at the React docs and how to use the [`style` attribute](http://reactjs.org/docs/dom-elements.html#style).

- Create a component `<People>` that displays a list of names in a `<ul>`. The names should comes from an array.
    
    ```jsx
    let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];
    
    // your component here
    ```

- Create a component `<Stuff>` that displays:
    
    ```jsx
    <div>
        <Header />
        <Paragraph />
        <Square />
        <People />
    </div>
    ```

## Tricksy

- Recreate `appify-me.html` using JSX components. Break the different sections of the site up into small components so that they don't become unmanageable - but don't get **too** carried away.
