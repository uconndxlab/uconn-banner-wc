import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'uconn-banner',
  styleUrls: [
    '../../../node_modules/uconn-banner/banner.css',

  ],
  shadow: true,
})
export class UConnBanner {

  @Prop() title: string = 'University Communications';
  @Prop() titleAbbr: string = "UComm";

  @Prop() disableSearchBtn: boolean = false;
  @Prop() disableIndexBtn: boolean = false;



//   private getText(): string {
//     return format(this.first, this.middle, this.last);
//   }

  render() {
    return <div id="uconn-banner" class="alternative no-js">
        
        <div id="uconn-header-container">
        
            <div class="row-container">
                <div class="row-fluid">
                    <div id="home-link-container">
                        <a id="home-link" href="https://communications.uconn.edu">
                            <span id="wordmark" aria-hidden="true">UConn</span>
                            
                            <span class="no-css">University of Connecticut school of </span>
                            
                            <span id="university-of-connecticut">{ this.title }</span>
                            
                            <span id="site-abbreviation">{ this.title }</span>
                            
                        </a>
                    </div>
                    
                    <div id="button-container">
                        <div class="icon-container" id="icon-container-search">
                            { !(this.disableSearchBtn) &&   
                           
                            <a class="btn btn-popup-control" id="uconn-search" href="https://uconn.edu/search" aria-haspopup="true"
                                aria-controls="search-popup" aria-expanded="false">
                                <span class="no-css">Search University of Connecticut</span>
                                
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" aria-hidden="true"
                                    class="banner-icon">
                                    <title>Search UConn</title>
                                    <path
                                        d="M28.072 24.749l-6.046-6.046c0.912-1.499 1.437-3.256 1.437-5.139 0-5.466-4.738-10.203-10.205-10.203-5.466 0-9.898 4.432-9.898 9.898 0 5.467 4.736 10.205 10.203 10.205 1.818 0 3.52-0.493 4.984-1.349l6.078 6.080c0.597 0.595 1.56 0.595 2.154 0l1.509-1.507c0.594-0.595 0.378-1.344-0.216-1.938zM6.406 13.258c0-3.784 3.067-6.853 6.851-6.853 3.786 0 7.158 3.373 7.158 7.158s-3.067 6.853-6.853 6.853-7.157-3.373-7.157-7.158z">
                                    </path>
                                </svg>
                            </a>
        } 
                            
                            <div id="search-popup" class="popup-container">
                                <div class="form-wrapper">
                                    <form action="https://communications.uconn.edu" method="GET" role="search">
                                        <input type="search" name="s" id="site-search" placeholder="Search this site..."
                                            aria-label="Search this site" /><button type="submit"><span class="no-css">Search
                                                University Communications</span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" aria-hidden="true"
                                                    class="banner-icon">
                                                    <title>Search UConn</title>
                                                    <path
                                                        d="M28.072 24.749l-6.046-6.046c0.912-1.499 1.437-3.256 1.437-5.139 0-5.466-4.738-10.203-10.205-10.203-5.466 0-9.898 4.432-9.898 9.898 0 5.467 4.736 10.205 10.203 10.205 1.818 0 3.52-0.493 4.984-1.349l6.078 6.080c0.597 0.595 1.56 0.595 2.154 0l1.509-1.507c0.594-0.595 0.378-1.344-0.216-1.938zM6.406 13.258c0-3.784 3.067-6.853 6.851-6.853 3.786 0 7.158 3.373 7.158 7.158s-3.067 6.853-6.853 6.853-7.157-3.373-7.157-7.158z">
                                                    </path>
                                                </svg></button>
                                    </form>
                                </div>
                                <hr />
                                <div class="link-wrapper search-link-wrapper">
                                    <a href="https://uconn.edu/search"><span class="banner-search-text">Search UConn</span></a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="icon-container" id="icon-container-az">
                            { !(this.disableIndexBtn) &&                            
                            <a class="btn" id="uconn-az" href="https://uconn.edu/az">
                                <span class="no-css">A to Z Index</span>
                                
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" aria-hidden="true"
                                    class="banner-icon">
                                    <title>UConn A to Z Search</title>
                                    <path
                                        d="M5.345 8.989h3.304l4.944 13.974h-3.167l-0.923-2.873h-5.147l-0.946 2.873h-3.055l4.989-13.974zM5.152 17.682h3.579l-1.764-5.499-1.815 5.499zM13.966 14.696h5.288v2.56h-5.288v-2.56zM20.848 20.496l7.147-9.032h-6.967v-2.474h10.597v2.341l-7.244 9.165h7.262v2.466h-10.798v-2.466h0.004z">
                                    </path>
                                </svg>
                            </a>
                            }
                            
                        </div>
                        
                        <div class="icon-container" id="icon-container-mobile-menu">
                            <a class="btn mobile-menu-btn" id="banner-mobile-button" aria-haspopup="true"
                                aria-controls="banner-controlled-mobile-menu" aria-expanded="false">
                                
                                
                                <svg width="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" class="banner-icon menu-toggle-open"
                                    aria-hidden="true">
                                    <path
                                        d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
                                </svg>
                                
                                
                                <svg width="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" class="banner-icon menu-toggle-close"
                                    aria-hidden="true">
                                    <path
                                        d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" />
                                </svg>
                                <span class="no-css">Click to <span id="menu-toggle-text">open</span> menu</span>
                            </a>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>;
  }
}
