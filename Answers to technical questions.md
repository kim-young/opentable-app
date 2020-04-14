1. How long did you spend on the coding test? What would you add to your solution if you had
   more time? If you didn't spend much time on the coding test then use this as an opportunity to
   explain what you would add.

I have spent 1.5 hours laying out the structure of the App, 1 hour for styling the components,
another 1 hour for meeting the WCAG 2.0 AA accessibility standards using the Web Accessibility
Evaluation Tool (WAVE), which totals up to approximately 3.5 to 4 hours. I had to re-make some of
the components (especially the dropdown that selects city), as the library package I imported did
not meet the accessibility standard.

If I had more time, I would add the following capabilities:

- Adding live search to the select form item, instead of having to browse through the dropdown to
  find the user's city
- Filtering from the list of restaurants (by cuisine, reviews, price range, etc.)
- Google Maps Api; defaulted to show distance from current location
- "Like" or "Save" the restaurant to profile for future access
- Styling the components to better suite the user's needs

2. What was the most useful feature that was added to the latest version of your chosen language?
   Please include a snippet of code that shows how you've used it.

For anyone who enjoys using React would hands-down say React Hooks are a definite winner here. It made
the managing states more convenient, efficient and most importantly, much easier to read in my opinion.
I have utilized React hooks for the entire app and here's a snippet:

const [cities, setCities] = useState([]);

useEffect(() => {
fetch("https://opentable.herokuapp.com/api/cities")
.then((res) => res.json())
.then(
(result) => {
console.log(result);
setCities(result.cities);
},
(error) => {
console.log("Get list of cities: " + error);
}
);
}, []);

I have used useState() to manage the states, and useEffect() in place of componentDidMount() to call the
function to get the list of viable cities on pageload.

3. How would you track down a performance issue in production? Have you ever had to do this?

My most recent project at Bell Canada involved 10,000+ agents acessing the application, therefore we had
instant feedbacks when there was a performance issue in production. Majority of the time was due to
querying stored procedures on the data level, which can be narrowed down using the 'Network' tab of the
Chrome DevTools. Then, they were quickly resolved by the backend developers. In terms of frontend react,
building the app with 'Create React App' and deploying just the build/ folder of the project was one way
to minimize the number of costly DOM operations, leading to faster UI.

4. How would you improve the API that you just used?

I recently came across Protocol Buffers (aka proto3), which is a flexible, efficient, automated mechanism
for serializing structured data. I have not used it personally, but I have read the documentation a couple of
times. It's simpler, smaller, more accessible and faster than XML for serializing structured data.

5. Please describe yourself using JSON.

Please refer to "kimyoung.json" in the same directory.
