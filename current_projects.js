function createProjectCard(imageSrc, title, description) {
    return `
        <div class="col-md-4 block-with-flex ftco-animate fadeInUp ftco-animated">
        <div class="project-card w-100" data-aos-delay="100">
            <div class="text project-card-title justify-content-center">
                  <img src="${imageSrc}" class="img-project" style="max-width: 100%; height: 150px;">                     
              </div>
              <div class="text project-card-blurb">
                  <p style="font-weight: 900; color: black; font-size: 1.1em;">
                      ${title}
                  </p>
                  <p>
                      ${description}
                  </p>
              </div>
              <div class="text project-card-links">
                  <div class="meta mb-3">
                      <div><a href="https://showspace.so/p/6223?refPageType=company&refPageLabel=Neurotech@Berkeley&refPageSlug=neurotech-berkeley" target="_blank">Insert link here!</a></div>
                  </div>
              </div>
          </div>
      </div>`;
}
