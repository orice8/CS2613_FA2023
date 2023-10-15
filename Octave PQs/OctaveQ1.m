% Load Data
citiesData = csvread('C:\Users\olivi\Desktop\Fall 2023\CS2613\Octave PQs\Cities.csv');
locationsData = csvread('C:\Users\olivi\Desktop\Fall 2023\CS2613\Octave PQs\Locations.csv');

% Parse Data
cityNames = char(citiesData(:, 1));
cityX = citiesData(:, 2);
cityY = citiesData(:, 3);

% Set Up Storage Variables and Matrices
numCities = size(cityNames, 1);
numLocations = size(locationsData, 1);
closestCity = zeros(numLocations, 1); % create empty matrix size of locations
closestDistance = inf(numLocations, 1);

% Calculate Euclidean Distance
for i=1:numLocations
    locationX = locationsData(i,1);
    locationY = locationsData(i,2);
    for j=1:numCities
        distance = sqrt((locationX - cityX(j))^2 + (locationY - cityY(j))^2);
        if distance < closestDistance(i)
            closestDistance(i) = distance;
            closestCity(i) = j;
        end
    end
end

% Create Empty Summary Matrix
citySummary = cell(numCities, 3);

% Count the number of locations closest to each city and store the nearest location
for i = 1:numCities
    citySummary{i, 1} = cityNames(i, :);
    citySummary{i, 2} = sum(closestCity == i);
    citySummary{i, 3} = find(closestCity == i, 1);
end

% Display the summary table
fprintf('City | # Closest | Nearest Location\n');
fprintf('===================================\n');
for i = 1:numCities
    fprintf('%-5s | %-11d | %-16d\n', citySummary{i, 1}', citySummary{i, 2}, citySummary{i, 3});
end
