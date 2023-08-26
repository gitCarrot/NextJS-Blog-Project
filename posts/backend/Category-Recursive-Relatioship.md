---
title: "[Spring Boot JPA] Recursive Data Relationship"
subtitle: "infinite subcategory with Tree Arch"
date: "2023-06-25"
category: "backend"
---

```Java
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Category {

    @Id
    private Long id;

    private String name;

    @OneToMany(mappedBy = "parent")
    private List<Category> subcategories;

    public Category() {
    }

    public Category(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Category> getSubcategories() {
        return subcategories;
    }

    public void setSubcategories(List<Category> subcategories) {
        this.subcategories = subcategories;
    }

    public void addSubcategory(Category subcategory) {
        this.subcategories.add(subcategory);
        subcategory.setParent(this);
    }

}
```

This code defines a simple entity class with the following properties:

id: The unique identifier of the category.
name: The name of the category.
subcategories: A list of subcategories that are nested under this category.
The addSubcategory() method is used to add a new subcategory to the category. This method also sets the parent of the subcategory to the current category.

This code can be used to create a hierarchy of categories with infinite depth. For example, the following code would create a hierarchy of categories with 3 levels:

```Java
Category rootCategory = new Category("Root");
Category subCategory1 = new Category("Sub Category 1");
Category subCategory2 = new Category("Sub Category 2");

rootCategory.addSubcategory(subCategory1);
rootCategory.addSubcategory(subCategory2);

subCategory1.addSubcategory(new Category("Sub Sub Category 1"));
subCategory2.addSubcategory(new Category("Sub Sub Category 2"));
```

This code would create the following hierarchy of categories:

```
Root
    |- Sub Category 1
        |- Sub Sub Category 1
    |- Sub Category 2
        |- Sub Sub Category 2
```

```Java
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Long> {

    @Query("SELECT c FROM Category c WHERE c.name = :name")
    Category findByName(String name);

    @Query("SELECT c FROM Category c WHERE c.parent IS NULL")
    List<Category> findAllRootCategories();

    @Query("SELECT c FROM Category c WHERE c.parent = :parentCategory")
    List<Category> findAllSubcategories(Category parentCategory);

}
```
This code defines three functions that can be used to query the category repository:

 - **findByName()**: This function returns a category with the specified name.
 - **findAllRootCategories()**: This function returns a list of all root categories (categories that have no parent).
 - **findAllSubcategories()**: This function returns a list of all subcategories of the specified category.
These functions use QueryDSL to create dynamic queries that can be used to filter and sort the results. For example, the findByName() function uses the WHERE clause to filter the results by the name of the category.


here is an example of how you can move the logic to the service layer:

```Java
@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category getCategoryByName(String name) {
        return categoryRepository.findByName(name);
    }

    public List<Category> getCategoriesByNameLike(String name) {
        return categoryRepository.findByNameLike(name);
    }

    public List<Category> getAllCategoriesWithParent() {
        return categoryRepository.findAllCategoriesWithParent();
    }

    public List<Category> getAllCategoriesSortedByNameDesc() {
        return categoryRepository.findAllCategoriesSortedByNameDesc();
    }

}
```
This code defines a service that exposes the same endpoints as the controller, but the logic is now moved to the service layer. This makes the code more modular and easier to test.

The service uses the categoryRepository bean to access the category repository. This bean is automatically injected by Spring Boot.

Here is an example of how you can use the service:

```
Java
@RestController
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/categories")
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @GetMapping("/categories/name/{name}")
    public Category getCategoryByName(@PathVariable String name) {
        return categoryService.getCategoryByName(name);
    }

    @GetMapping("/categories/like/{name}")
    public List<Category> getCategoriesByNameLike(@PathVariable String name) {
        return categoryService.getCategoriesByNameLike(name);
    }

    @GetMapping("/categories/withParent")
    public List<Category> getAllCategoriesWithParent() {
        return categoryService.getAllCategoriesWithParent();
    }

    @GetMapping("/categories/sortedByNameDesc")
    public List<Category> getAllCategoriesSortedByNameDesc() {
        return categoryService.getAllCategoriesSortedByNameDesc();
    }

}
```

This code uses the categoryService bean to access the category service. This bean is automatically injected by Spring Boot.


here is the code to generate the URL with the parent's parent category:

```Java
public String getCategoryUrl(Category category) {
    StringBuffer url = new StringBuffer();
    url.append("/");
    url.append(category.getName());
    Category parent = category.getParent();
    while (parent != null) {
        Category grandparent = parent.getParent();
        if (grandparent != null) {
            url.append("/");
            url.append(grandparent.getName());
        }
        url.append("/");
        url.append(parent.getName());
        parent = parent.getParent();
    }
    return url.toString();
}
```
This code is similar to the previous code, but it adds an extra step to check if the parent category has a parent. If the parent category has a parent, then the name of the parent's parent is appended to the URL.

For example, if the subcategory has the name "Subcategory" and its parents are "ParentCategory1" and "Root", then the generated URL would be:

```
/Root/ParentCategory1/Subcategory
```
You can use this code in your controller to generate the URL for a subcategory. For example, the following code would generate the URL for the subcategory "Subcategory" and its parents:


```Java
@GetMapping("/categories/{name}")
public String getCategoryUrl(@PathVariable String name) {
    Category category = categoryRepository.findByName(name);
    return getCategoryUrl(category);
}
```

This code uses the categoryRepository bean to get the category by name. The getCategoryUrl() method is then used to generate the URL for the category.



I can make a relationship between the article and category entities. The relationship between the two entities is a one-to-many relationship. This means that a category can have multiple articles, but an article can only have one category.

Here is the code for the relationship between the article and category entities:

```Java
public class Article {

    private Long id;
    private String title;
    private String content;
    @ManyToOne
    private Category category;

    public Article() {
    }

    public Article(String title, String content, Category category) {
        this.title = title;
        this.content = content;
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

}
```
```Java
public class Category {

    private Long id;
    private String name;
    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    private List<Article> articles;

    public Category() {
    }

    public Category(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Article> getArticles() {
        return articles;
    }

    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }

}
```
The @ManyToOne annotation on the category property in the Article class indicates that the category property is a reference to a Category entity. The @OneToMany annotation on the articles property in the Category class indicates that the articles property is a collection of Article entities.

This code ensures that a category can have multiple articles, but an article can only have one category.


