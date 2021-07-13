function Find_First_Child(Parent, Class) {

    var First_Child_Node = null;

    Parent.find(Class).each(function () {
        First_Child_Node = $(this);
        return;
    });

    return First_Child_Node;
}