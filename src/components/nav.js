import React, { useState, useEffect} from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Modal from "./modal"
import Cart from "./cart";

const Nav = () => {
  const [ isCartModalOpen, setCartModalOpen ] = useState(false);

  return ( 
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          Nav {
            navText
          }
        }
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}

    
    render={data =>
      <div>
        <div>
          <nav className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li>
                  <Link to="/">{data.strapiHomepage.Nav.navText}</Link>
                </li>
              </ul>
            </div>

            <div className="uk-navbar-right">
            <button className="uk-button uk-button-default uk-margin-right" type="button">Categories</button>
            <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
                <ul className="uk-nav uk-dropdown-nav">
                { data.allStrapiCategory.edges.map((category, i) => {
                    return (
                      <li key={`category__${category.node.slug}`}>
                        <Link to={`/category/${category.node.slug}`}>
                          {category.node.name}
                        </Link>
                      </li>
                    )
                  })
                }
                </ul>
            </div>
            <button className="uk-button uk-button-default uk-margin-right" type="button" onClick={() => setCartModalOpen(true)}>Cart <span>🛒</span></button>
            </div>
          </nav>
        </div>
        <Modal
          isOpen={isCartModalOpen} 
          modalHandler={setCartModalOpen}
        > 
        <Cart/>
        
        </Modal>
      </div>
    }
  />
)}

export default Nav
