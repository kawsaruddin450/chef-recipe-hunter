export const chefLoader = async (id) => {
    const res1 = await fetch(`http://localhost:3000/chef/${id}`);
    const chef = await res1.json();

    const res2 = await fetch(`http://localhost:3000/chefs/${id}`);
    const recipes = await res2.json();

    return {chef, recipes}
}