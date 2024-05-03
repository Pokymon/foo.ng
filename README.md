## Free Subdomains under foo.ng

This project offers free subdomains under the `foo.ng` domain for anyone who needs a custom URL for their web project, Minecraft server, or anything else that can be pointed to via a DNS record.

## What is "foo"?

The term "foo" is a placeholder word often used in computer programming and technical examples. It doesn't have a specific meaning, but it's used to represent a generic name or concept when the actual name doesn't matter.

**Important Note:** You can only configure one record type per subdomain: either an [A Record](https://foo.ng/a) (points directly to an IP address) or a [CNAME Record](https://foo.ng/cname) (points to another domain name).

### Getting Started

Here's how to claim your free subdomain:

1. **Star this Repository:** Click the star icon in the top right corner of this repository.
2. **Fork this Repository:**  Click on "Fork" button to create your own copy of this repository.
3. **Set Up Your Project:** 
    - Configure your web project, Minecraft server, or other service to be accessible at a custom domain.
    - Choose a hosting platform like [GitHub Pages](https://foo.ng/githubpages), Vercel, or any provider that allows custom domains. 
4. **Add Your Subdomain:**
    - Open the `subdomains.json` file in this repository.
    - Add a new entry in the following format:

    ```json
    "your-subdomain": "your-target-location"
    ```
        - Replace `your-subdomain` with the desired subdomain name (e.g., "bar").
        - Replace `your-target-location` with your project's location depending on the record type:
            - For an A Record: Use the IP address your project is hosted on (e.g., "127.0.0.1"). 
            - For a CNAME Record: Use the domain name your project is currently accessible on (e.g., "cname.example.com").
5. **Sort Keys:**
    - Run the following commands in your terminal to sort the subdomains alphabetically:

        ```bash
        npm install
        npm run sort
        ```
6. **Submit Pull Request:** 
    - Create a pull request from your forked repository to this repository. 
    - Briefly describe your project in the pull request description.
    - We'll review your pull request and merge it if everything looks good. Once merged, your subdomain will be live at `your-subdomain.foo.ng`!

**Example `subdomains.json` Entry:**

```json
{
  "bar": "cname.example.com",
  "foo": "127.0.0.1"
}
```

### Donations

This project is completely free to use. If you find it helpful and would like to support its development, you can make a donation through [PayPal](https://foo.ng/paypal).

### License

This project is licensed under the MIT License.  Please see the `LICENSE` file for details.

### Contact

For any questions or inquiries about this project, feel free to reach out via email: fauqi@nic.foo.ng.
