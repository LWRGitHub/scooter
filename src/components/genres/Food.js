import React from 'react';

const Food = () => (
    <div>
        <div className="row row-cols-1 row-cols-md-3">
            <a href='https://www.amazon.com/gp/product/B07KDR6Z69/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i1' target="_blank">
                <div class="col mb-4">
                    <div class="card">
                    <img src="images/yes-yes-vegan.png" class="card-img-top" alt="Book cover for yes yes vegan worldwide by the midnight dream publishing. Image includes a red map pop-up icon indicating location below that are the words the title yes yes vegan world wide And below that is a map just above the map of the world it says by Logan Reynolds." />
                    {/* <div class="card-body">
                        <p class="card-text">...</p>
                    </div> */}
                    </div>
                </div>
            </a>
            
        </div>
    </div>
)

export default Food;