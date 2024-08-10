export const chefLoader = async (id) => {
    const res1 = await fetch(`https://chef-recipe-hunter-server-wine.vercel.app/chef/${id}`);
    const chef = await res1.json();

    const res2 = await fetch(`https://chef-recipe-hunter-server-wine.vercel.app/chefs/${id}`);
    const recipes = await res2.json();

    return {chef, recipes}
}