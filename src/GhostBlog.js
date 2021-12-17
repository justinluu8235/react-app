import React, { Component } from 'react';
import './GhostBlog.css';
import axios from 'axios';



class GhostBlog extends Component {
    constructor(props) {
        super(props);
        this.state = { recipes: [] };
    }

    async componentDidMount() {
        let query = "chicken";
        let API_KEY = "2901de0d76fa46d1a71c015c429873f6";
        await axios
            .get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}&number=6`)
            .then((response) => {
                this.setState({
                    recipes: response.data.results
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    displayRecipes() {
        let displayRecipeList = this.state.recipes.map((recipe, idx) => {
            return (
                <div className="column post is-4" key={idx}>
                <article className="columns is-multiline">
                    <div className="column is-12 post-img">
                        <img src={recipe.image} alt="Featured Image" />
                    </div>
                    <div className="column is-12 featured-content ">
                        <h3 className="heading post-category">Category Name</h3>
                        <h1 className="title post-title" title="recipe-title">{recipe.title}</h1>
                        <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                        <br />
                        <a href="#" className="button is-primary">Read More</a>
                    </div>
                </article>
            </div>
            );
        });

        return displayRecipeList;
    }


    render() {
        return (
            <div>
                <section className="hero is-medium">
                    <div className="hero-head">
                        <div className="container">
                            <nav className="navbar" role="navigation" aria-label="main navigation">

                                <div id="navbarBasicExample" className="navbar-menu">
                                    <div className="navbar-start">
                                        <a className="navbar-item is-active">
                                            Home
                                        </a>
                                        <a className="navbar-item" data-testid="myRecipesLink">
                                            My Recipes
                                        </a>
                                    </div>

                                    <div className="navbar-end">
                                        <div className="navbar-item">
                                            <a href="#">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fas fa-rss-square"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <img src="https://cdn.emk.dev/templates/bulma-logo-light.png" width="150" height="40" />
                            <h2 className="subtitle">
                                Ghost's Casper theme made with Bulma
                            </h2>
                        </div>
                    </div>
                </section>
                <section className="blog-posts">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="columns featured-post is-multiline">
                                    <div className="column is-12 post">
                                        <article className="columns featured">
                                            <div className="column is-7 post-img ">
                                                <img src="https://cdn.emk.dev/templates/featured-image.png" alt="" />
                                            </div>
                                            <div className="column is-5 featured-content va">
                                                <div>
                                                    <h3 className="heading post-category">Category Name</h3>
                                                    <h1 className="title post-title" data-testid="top-recipe" >Top Recipe</h1>
                                                    <p className="post-excerpt">This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!</p>
                                                    <br />
                                                    <a href="#" className="button is-primary">Read More</a>
                                                </div>

                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <hr />
                                <div className="columns is-multiline">
                                    <div className="column post is-6">
                                        <article className="columns is-multiline">
                                            <div className="column is-12 post-img">
                                                <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image" />
                                            </div>
                                            <div className="column is-12 featured-content ">
                                                <h3 className="heading post-category">Category Name</h3>
                                                <h1 className="title post-title">Slightly Longer Blog Post Title</h1>
                                                <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                                <br />
                                                <a href="#" className="button is-primary">Read More</a>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="column post is-6">
                                        <article className="columns is-multiline">
                                            <div className="column is-12 post-img">
                                                <img data-testid="image" src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image" />
                                            </div>
                                            <div className="column is-12 featured-content ">
                                                <h3 className="heading post-category">Category Name</h3>
                                                <h1 className="title post-title">Slightly Longer Blog Post Title</h1>
                                                <p className="post-excerpt" title="test-important-post">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                                <br />
                                                <a href="#" className="button is-primary">Read More</a>
                                            </div>
                                        </article>
                                    </div>
                                    {this.displayRecipes()}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default GhostBlog;