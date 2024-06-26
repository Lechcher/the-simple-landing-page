import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <h2>Welcome to your App Component 🎉</h2>
            <span>
                Double click to edit App component
                <br />
                &amp; drag here elements from + Add <b>Elements</b> Panel
            </span>
            <p
                style={{
                    fontSize: '12px',
                    marginTop: '80px',
                    display: 'flex',
                    gap: '3px',
                    justifyContent: 'center',
                }}
            >
                This project is using <img src="/src/assets/vite.svg" width="12" />+
                <img src="/src/assets/typescript.svg" width="12" />
                Visit vitejs.dev to learn more.
            </p>
        </div>
    );
}

export default App;

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>