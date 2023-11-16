public static Dictionary<string, int> AverageAgeForEachCompany(List<Employee> employees)
{
    var result = new Dictionary<string, int>();
    foreach (var company in employees.Select(x => x.Company).Distinct().OrderBy(x => x))
    {
        result.Add(company, (int)Math.Round(employees.Where(x => x.Company == company).Average(y => y.Age), 0));
    }

    return result;
}

public static Dictionary<string, int> CountOfEmployeesForEachCompany(List<Employee> employees)
{
    var result = new Dictionary<string, int>();
    foreach (var company in employees.Select(x => x.Company).Distinct().OrderBy(x => x))
    {
        result.Add(company, (int)employees.Where(x => x.Company == company).Count());
    }

    return result;
}

public static Dictionary<string, Employee> OldestAgeForEachCompany(List<Employee> employees)
{
    var result = new Dictionary<string, Employee>();
    foreach (var company in employees.Select(x => x.Company).Distinct().OrderBy(x => x))
    {
        result.Add(company, employees.Where(x => x.Company == company).OrderByDescending(y => y.Age).First());
    }

    return result;
}
