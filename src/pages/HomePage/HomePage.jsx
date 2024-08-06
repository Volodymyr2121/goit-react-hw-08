import css from "./HomePage.module.css"

export default function HomePage() {
     return (
          <section className={css.hero}>
      <div className={css.heroContent}>
        <h1>Welcome to Your Contact Manager</h1>
        <p>Manage your contacts effortlessly with our simple and intuitive interface.</p>
      </div>
    </section>
  );
}