# Demo
https://mikeyparton.github.io/7/

# Considerations
- Looking at the designs in the provided assets I thought that the uneven spacing between fixed width cards looked a bit awkward, so I implemented a standard grid with flexbox and responsive grid elements maintaining a 16:9 aspect ratio. This would have been easy to implement using grid, but at this stage browser support is still better with flexbox.
- I decided to use buttons as the root of the card elements because you get keyboard navigation for free.
-  I chose to keep the state for the selectedShow & sidebarOpen seperate. This is probably the easiest way of keeping the show in the sidebar as it animates out. As the contents of the sidebar are not too expensive to keep in the DOM, I didn't see any reason to unmount it when it is closed.
- At the moment I keep the entire selected show object in state. This is ok for now since there is no way to update the individual show objects. If the shows themselves were mutable, I would make sure to store the selected show id to ensure a single up to date source of truth.
- The z-index and media query values I've used could be organised a bit better if the project was more involved or there was more time. Since we're using styled components, it would be nice to keep these in a theme to improve maintainability.
- As a little bonus I also added a zoom effect on the image when you hover or focus on an a card.
- The asset sizes are enormous! If I were going to deploy this to a real site, I would make sure the images are all optimised. 1.5mb for a 7 logo is excessive and would definitely hurt the performance of the page.
