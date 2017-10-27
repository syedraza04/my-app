#Key Property

Inside the return method we are returning a List of
Person Components so what React does is it re renders the
whole list because React does not know at which place
the changes occur.


Key allows React to keep track of the individual elements
so that it has a clear property it can compare between difference
elements to find out which elements did change and assign them

